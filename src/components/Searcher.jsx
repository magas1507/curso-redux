import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearchs } from "../slices/dataSlice";

const Searcher = () =>{
    const dispatch = useDispatch();
    const handleOnChange = (pokemon) =>{
        dispatch(setSearchs(pokemon.target.value))
    }
    return <Input.Search placeholder="Buscar..." style={{marginBottom:'15px'}} onChange={handleOnChange}/>
}

export default Searcher;