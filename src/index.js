import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("imcompleted-list").removeChild(target);
};

// 未完了リストに追加
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button　タグ生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    deleteFromIncompleteList(completebutton.parentNode);

    // 完了リストに要素追加
    const addTarget = completebutton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("completed-list").appendChild(addTarget);
  });

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    // 削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deletebutton.parentNode);
  });

  // divの子要素に各要素
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);
  console.log(div);

  // 未完了リストに追加
  document.getElementById("imcompleted-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
