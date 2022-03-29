import React, { useRef, useState } from "react";

// 제어가 되는 컴포넌트
export default function AddColorForm({ onNewColor = f => f }) {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = e => {
        e.preventDefault(); // 브라우저가 폼을 POST 요청으로 제출하지 못하도록 방지
        onNewColor(title, color);
        setTitle("");
        setColor("#000000");
    };

    return (
        <form onSubmit={submit}>
            <input 
                value={title}
                onChange={event => setTitle(event.target.value)}
                type="text" 
                placeholder="color title..." 
                required 
            />
            <input 
                value={color}
                onChange={event => setColor(event.target.value)}
                type="color" 
                required 
            />
            <button>ADD</button>
        </form>
    );
}

// 제어되지 않는 컴포넌트
// export default function AddColorForm({ onNewColor = f => f }) {
//     const txtTitle = useRef();
//     const hexColor = useRef();

//     const submit = e => {
//         e.preventDefault(); // 브라우저가 폼을 POST 요청으로 제출하지 못하도록 방지
//         const title = txtTitle.current.value;
//         const color = hexColor.current.value;
//         onNewColor(title, color);
//         // DOM을 통해 폼 값을 저장하기 때문에 제어되지 않는 컴포넌트
//         txtTitle.current.value = "";
//         hexColor.current.value = "#000000"; // 공백으로 설정할 경우 콘솔에 워닝
//     };

//     return (
//         <form onSubmit={submit}>
//             <input ref={txtTitle} type="text" placeholder="color title..." required />
//             <input ref={hexColor} type="color" required />
//             <button>ADD</button>
//         </form>
//     );
// }