// На входе функция принимает статус и возвращает цвет для него
export function getStatusColor ( status: string ) {
    switch (status) {
        case ("Ongoing"):
            return "rgba(67, 173, 40, 1)";

        case ("Scheduled"):
            return "rgba(235, 100, 2, 1)";

        default:
            return "rgba(235, 2, 55, 1)";
    }
}


// Функция в параметрах получает список всех матчей и возвращает из них только список со статусами
export function getStatusList (list: any[]) {
    const statusList: string[] = list.map(
        i => i.status
    );

    return Array.from(new Set(statusList));
}