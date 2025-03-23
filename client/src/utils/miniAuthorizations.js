export const checkIsOwner = (userId, ownerId) => {
    if(userId !== undefined){
        return userId === ownerId;
    } else{
        return false;
    }
}