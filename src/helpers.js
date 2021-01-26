export const getHomeTitle = (title) => {
    const arr = title.split(' ');
    arr.splice(1, 1, `<br/><span style={{color: '#f82249'}}>${arr[1]}</span>`);
    return arr.join(' ');
};
