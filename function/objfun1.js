const data = {
    items: [
        {
            id: 119603782,
            node_id: "MDEwOlJlcG9zaXRvcnkxMTk2MDM3ODI=",
            name: "react-contextual",
            full_name: "drcmda/react-contextual",
            private: false,
            owner: {
                login: "drcmda",
                id: 2223602,
            },
        },
        {
            id: 119603782,
            node_id: "MDEwOlJlcG9zaXRvcnkxMTk2MDM3ODI=",
            name: "react-contextual",
            full_name: "drcmda/react-contextual",
            private: false,
            owner: {
                login: "drcmda",
                id: 2223602,
            },
        },
    ],
};

const items = data.items.map((item, idx) => ({ ...item, idx }));

// new item
const newItem = {
    id: 119603782,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTk2MDM3ODI=",
    name: "react-contextual",
    full_name: "drcmda/react-contextual",
    private: false,
    owner: {
        login: "drcmda",
        id: 2223602,
    },
};

function addNewItems(items, newItem) {
    newItem.idx = items.length;
    items.push(newItem);
    return items;
}

//console.log(addNewItems(items, newItem));
console.log(items[0].id);