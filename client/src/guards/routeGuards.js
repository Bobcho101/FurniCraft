export const useIsUser = (accessToken) => {
    if(!accessToken){
        return false;
    } else {
        return true;
    }
}