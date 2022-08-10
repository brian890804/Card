import * as requestFromServer from "./Crud";
export const getExampleData = (setExample) => {
    return requestFromServer.getExampleData().then((response) => {
        const res = response.data;
        console.log(res,'response')
        switch (res.status) {
            case 'ok':
                return setExample(res.articles)
            default:
                break;
        }
    });
};