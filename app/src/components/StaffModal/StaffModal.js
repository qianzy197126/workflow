import React, {
    Component
} from 'react'
import {
    Modal,
    Button,
    WhiteSpace,
    WingBlank,
    Toast,
    SearchBar,
    Accordion,
    List,
    Checkbox,
    Flex,
    Radio
} from 'antd-mobile'
import './StaffModal.less'
import {
    PATH
} from '../../config/path';
const alert = Modal.alert
const CheckboxItem = Checkbox.CheckboxItem
const RadioItem = Radio.RadioItem;

import json from './Mock.json'
import searchJson from './MockSearch.json'



const hasSelected = (key, arr) => {
    return arr.some(item => {
        return item === key;
    });
}

class StaffModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: [],
            selected: [],
            selectedName: [],
            single: -1
        };
    }

    componentDidMount() {
        this.fetchData();
    }


    //用于获取远程数据
    fetchData(name) {
        let _this = this;
        let fullName = name ? name : '';
        fetch(PATH + 'departmentTree.do?depID=1247027&fullName=' + fullName, {
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then(data => {
            _this.setState({
                data: JSON.parse(data)
            });
        }).catch((err) => {
            alert('获取数据存在问题');
        });
    }


    showModal = key => (e) => {
        // 现象：如果弹出的弹框上的 x 按钮的位置、和手指点击 button 时所在的位置「重叠」起来，
        // 会触发 x 按钮的点击事件而导致关闭弹框 (注：弹框上的取消/确定等按钮遇到同样情况也会如此)
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
        if (this.props.countersign) {
            let IDStr = this.state.selected.join(',');
            this.props.setuserIDs(IDStr)
        } else {
            this.props.setuserIDs(this.state.single)
        }

    }

    onChange = (key) => {}

    onSelectChange = (key, name) => {
        //通过员工id进行员工选择状态的转换

        let selected = this.state.selected.concat();
        let selectedName = this.state.selectedName.concat();
        let count = 0;
        let deleteIndex = 0;

        if (hasSelected(key, selected)) {
            selected = selected.filter((item) => {
                count++;
                if (item !== key) {
                    return true;
                } else {
                    deleteIndex = count;
                    return false;
                }
            })
            count = 0;
            selectedName = selectedName.filter(() => {
                count++;
                return count !== deleteIndex;
            });
        } else {
            selected.push(key);
            selectedName.push(name);
        }

        this.setState({
            selected: selected,
            selectedName: selectedName
        }, () => {

        });
    }

    onSearchChange = (key) => {
        this.fetchData(key);
    }

    renderItem = () => {
        let data = this.state.data;
        let insert = data.map(item => {
            return (
                <Accordion.Panel key={item.id} header={item.text} className="pad">
                <List className="sm-list">
                    {item.children.map((staff,index) => {
                        if(this.props.countersign){
                            return (
                                <CheckboxItem key={staff.id} checked={hasSelected(staff.id, this.state.selected)} 
                                    onChange={() => this.onSelectChange(staff.id, staff.text)}>
                                    {staff.text}
                                </CheckboxItem>
                            );
                        }else{
                            return (
                                <RadioItem key={index} checked={this.state.single === staff.id}
                                    onChange={() => {this.setState({single:staff.id})}}>
                                    {staff.text}
                                </RadioItem>
                            );
                        }
                    })}
                </List>
            </Accordion.Panel>
            )
        });
        return insert;
    }

    renderName() {
        let selectedName = this.state.selectedName.concat();
        let nameStr = selectedName.join(',');
        return nameStr;
    }

    render() {

        return (
            <div>
            <Flex direction="row" justify="start">
                <Flex.Item><span className="sm-title">下一步处理人：</span></Flex.Item>
                <Flex.Item><span className="sm-name">{this.state.selected.length > 0 ? this.renderName() : '请选择人员'}</span></Flex.Item>
                <Flex.Item><Button className="sm-btn" type="primary" inline size="large" onClick={this.showModal('modal')}>选择人员</Button></Flex.Item>
            </Flex>

            <Modal
                transparent
                maskClosable={false}
                visible={this.state.modal}
                onClose={this.onClose('modal')}
                footer={[
                    { text: '取消', onPress: () => { this.setState({selected: [], selectedName: []},() =>{this.props.setuserIDs("")}); this.onClose('modal')(); } },
                    { text: '确定', onPress: () => { this.onClose('modal')(); } }
                    ]}
                style={{width: '90%'} }
                >
                <SearchBar placeholder="输入姓名" onChange={this.onSearchChange}/>
                <Accordion defaultActiveKey="0" className="sm-accordion" onChange={this.onChange}>
                    {this.renderItem()}
                </Accordion>
            </Modal>
        </div>
        );
    }
}

export default StaffModal