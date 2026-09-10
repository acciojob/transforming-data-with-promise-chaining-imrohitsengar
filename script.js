//your JS code here. If required.
function hello(){
	const inputVal=document.getElementById('ip').value;
	return  new Promise((res)=>{
		setTimeout(()=>{
			res(inputVal);
		},2000)
	}).then((resolvedData)=>{
		const output=document.getElementById('output');
		output.textContent=`Result:${resolvedData}`;
		return new Promise((res)=>{
			setTimeout(()=>{
			res(resolvedData);
			},2000)
		})
	}).then((resolvedData)=>{
		const output=document.getElementById('output');
		output.textContent=`Result:${resolvedData * 2}`;
		return new Promise((res)=>{
			setTimeout(()=>{
			res(resolvedData);
			},2000)
		})
	}).then((resolvedData)=>{
		const output=document.getElementById('output');
		output.textContent=`Result:${(resolvedData*2)-3}`;
		return new Promise((res)=>{
			setTimeout(()=>{
			res(resolvedData);
			},2000)
		})
	}).then(resolvedData=>{
		const output=document.getElementById('output');
		output.textContent=`Result:${((resolvedData*2)-3)/2}`;
		return new Promise((res)=>{
			setTimeout(()=>{
			res(resolvedData);
			},2000)
		})
	}).then((resolvedData)=>{
		const output=document.getElementById('output');
		output.textContent=`Final Result:${(((resolvedData*2)-3)/2)+10}`;
	})
	
}