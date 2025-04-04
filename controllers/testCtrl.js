const handleExample = (request, response)=>{

    return response.status(200).json({message :"This is a test route."})
} 



module.exports = {

    handleExample
}