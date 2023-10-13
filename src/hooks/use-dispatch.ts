import { useDispatch } from "react-redux";
const useDispatcher = () => {
    const dispatch = useDispatch();

    const customDispatch = (action: any) => {
        dispatch(action);
    }
    return customDispatch;
}

export default useDispatcher;