import $api from "./api"

export const fetchData = async () => {
    const { data } = await $api
        .get("fronttemp");

    return data.data;
}