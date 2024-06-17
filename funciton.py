import requests
import json
from tkinter import simpledialog, messagebox

api_key = "ee2b37bc"

def search_movies():
    search_query = simpledialog.askstring("Input", "Enter movie title:")
    if not search_query or search_query.strip() == "":
        messagebox.showerror("Error", "Enter movie title")
        return
    try:
        api_url = f"https://www.omdbapi.com/?apikey={api_key}&s={search_query}"
        response = requests.get(api_url)
        data = json.loads(response.text)
        if data["Response"] == "True":
            # TODO: Process the search results and display the movies
            print("Movies found:", data)
        else:
            messagebox.showerror("Error", "Movie not found")
    except Exception as e:
        messagebox.showerror("Error", str(e))

\