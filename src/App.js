import "./App.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Nav from "./components/Nav";

function App() {
    return (
        <div>
            <Nav />
            <main className="py-12 2xl:px-6">
                <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                    <BookList />
                    <AddBook />
                </div>
            </main>
        </div>
    );
}

export default App;
