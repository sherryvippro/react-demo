import './App.css'
import { useState } from 'react'

function App() {
    const initItems = Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `Item ${i}`,
    }))

    const [items, setItems] = useState(initItems)

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const updateItem = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, name: item.name + ' (Updated) ' } : item,
            ),
        )
    }

    return (
        <div className="App">
            <h1>React Item List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                        <button onClick={() => updateItem(item.id)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
