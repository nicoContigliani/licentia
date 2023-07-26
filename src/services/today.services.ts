export const today = async() => {
    const now = new Date();
    return now.toISOString().slice(0, 10);
}