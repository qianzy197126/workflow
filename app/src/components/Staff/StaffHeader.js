import react fom 'React';


class StaffHeader extends React.Component{
	render(){
		return (
			<div>
				<tr>
					<td><input type='text' placeholder='search...' /></td>
					<td>
						<label>筛选条件</label>
						<select>
							<option>全部</option>
							<option>主任</option>
							<option>老师</option>
						</select>
					</td>
					<td>
						<label>排序方式</label>
						<select>
							<option>身份</option>
							<option>年龄升</option>
							<option>年龄降</option>
						</select>
					</td>
				</tr>
			</div>
			)
	}
}

export default StaffHeader