const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=9301fa1d112843ef881111538251104&q=';

export  const requester = async (city) => {

    if(!city){
        return;
    };
    try{
        const result = await fetch(baseUrl+city)
        const data = await result.json();

        return data;
    }catch(err){
        throw new Error('We can\'t find your city!')
    }
}