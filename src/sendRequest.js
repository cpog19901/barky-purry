const sendRequest = () =>{
    useEffect(() => {
        axios.get("http://api.giphy.com/v1/gifs/search?api_key=qeYXgCES3uM22GY3CucKAMQNlzL8X5vL&q="+queryTerm)
        .then(res => {
            setImages(res.data.data)
            console.log(res.data.data)
            
           
            
        })
       
        .catch(err => {
            console.log(err)
            
        })
         //data is fetched only once
    }, [])

}