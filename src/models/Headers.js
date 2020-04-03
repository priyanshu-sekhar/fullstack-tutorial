export const GET_HEADER = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const POST_HEADER = (entity) => {
    return (
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(entity)
        }
    )
};
