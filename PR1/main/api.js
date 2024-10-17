
const taskApi = {
    post: async (task) => {
        let req = await fetch("http://localhost:3500/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(task)

        })
    },
    get: async () => {
        let req = await fetch("http://localhost:3500/");
        let res = await req.json();
        return res;
    },
    patch: async (id, task) => {
        let req = await fetch(`http://localhost:3500/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(task)

        })
    },
    delete: async (id) => {

        let req = await fetch(`http://localhost:3500/${id}`, {
            method: "DELETE",

        })
    }
}

export default taskApi