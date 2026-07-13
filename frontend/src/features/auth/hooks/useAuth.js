import { setError,setLoading,setUser } from "../state/auth.slice";
import { register } from "../services/auth.api";
export const useAuth = ()=>{
    
    async function handleRegister({email,password,usernmae,location,phone}) {
        const dispatch = useDispatch();

        const data = await register({email,password,usernmae,location,phone})
          dispatch(setUser(data.user));    
    }
    return {handleRegister}
}