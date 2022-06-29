<table border="4" bgcolor="lightpink"  cellspacing="10px" cellpadding="10px" >
<tr>
    <th>
        ID---UserId----------Date&Time
    </th>
</tr>
<tr  >
    <td>
    {this.state.crt.map(value=>{
return (
<p style={mysle}>
    {value.id}-------{value.userId}------{value.date}
    <hr></hr>
</p>
);
})}
    </td>
</tr>
</table>