export default function FormTodo(params) {
    function search(formData) {
        const query = formData.getQuery("query");
        alert(`you search form '${query}'`);
    }

    return (
        <>
            <form action={search}>
                <input type="text" name="query" />
                <button type="submit">Search</button>
            </form>
        </>
    );
}
