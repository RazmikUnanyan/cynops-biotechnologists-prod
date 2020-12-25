export const getHomeTitle = (title) => {
    const arr = title.split(' ');
    arr.splice(2, 1, `<br/><span style={{color: '#f82249'}}>${arr[2]}</span>`);
    return arr.join(' ');
};
