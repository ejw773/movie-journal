$().ready(()=>{
    function stringifyFormData(fd){
        const data = {};
        for(let field of fd.keys()){
            data[field] = fd.get(field)
        }
        return JSON.stringify(data, null, 2);
    }
    async function postData(url, body){
        const response = await fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body,
        })
        return response.json();
    }
    $('#filmForm').submit((e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const stringified = stringifyFormData(data);
        postData('http://localhost:3001/films',stringified)
        .then(data => console.log('data', data));
    });
});