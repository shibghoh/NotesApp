const BASE_URL = "https://notes-api.dicoding.dev/v2";

async function getNotes(setLoading) {
    try {
        if (setLoading) setLoading(true);
        const response = await fetch(`${BASE_URL}/notes`);
        const data = await response.json();

        if (!response.ok) throw new Error(data.message);
        return data;
    } catch (error) {
        console.error("Gagal mengambil catatan:", error);
        return { error: error.message };
    } finally {
        if (setLoading) setLoading(false);
    }
}

async function addNote(title, body, setLoading) {
    try {
        if (setLoading) setLoading(true);
        const response = await fetch(`${BASE_URL}/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body })
        });
        const data = await response.json();

        if (!response.ok) throw new Error(data.message);
        return data;
    } catch (error) {
        console.error("Gagal menambahkan catatan:", error);
        return { error: error.message };
    } finally {
        if (setLoading) setLoading(false);
    }
}

async function deleteNote(id, setLoading) {
    try {
        if (setLoading) setLoading(true);
        const response = await fetch(`${BASE_URL}/notes/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();

        if (!response.ok) throw new Error(data.message);
        return data;
    } catch (error) {
        console.error("Gagal menghapus catatan:", error);
        return { error: error.message };
    } finally {
        if (setLoading) setLoading(false);
    }
}

export { getNotes as fetchNotes, addNote, deleteNote };
