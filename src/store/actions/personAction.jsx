export { removeperson } from '../reducers/personSlice'
import axios from '../../utils/axios'
import { loadperson } from '../reducers/personSlice'


export const asyncloadperson = (id)=> async(dispatch, getState)=>{
    try{
        const detail = await axios.get(`/person/${id}`)
        const externalid = await axios.get(`/person/${id}/external_ids`)
        const tvCredits = await axios.get(`/person/${id}/tv_credits`)
        const movieCredits = await axios.get(`/person/${id}/movie_credits`)
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`)
        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            tvCredits: tvCredits.data,
            movieCredits: movieCredits.data,
            combinedCredits: combinedCredits.data,
        }
        
        dispatch(loadperson(theultimatedetails));
        // console.log(theultimatedetails);
        


    }catch(error){
        console.log(error);
        
    }
}