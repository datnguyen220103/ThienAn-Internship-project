import { TO_DO_LIST } from './fake-API';

const getAll = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(TO_DO_LIST);
        }, 250)
    })
}
export default{
    getAll, 
}