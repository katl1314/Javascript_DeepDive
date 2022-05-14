var el = document.getElementById("foo");

console.log(el);

/**
 * Document.prototype.createElement(tagName) : 새로운 요소 노드를 생성 후 반환함.
 */
const newEl = document.createElement("span");
console.log("생성한 요소 노드", newEl);

// 생성한 요소 노드 안에 innerHTML을 이용하여 텍스트를 추가해보자.
// newEl.innerHTML = "새로운 요소 노드";

/**
 * Document.prototype.createTextNode(text) : 새로운 텍스트 노드를 생성 및 반환함.
 */

var textEl = document.createTextNode("text Node");

/**
 * Node.prototype.appendChild(node);
 * 요소 노드의 자식 노드로 추가하는 메서드임.
 */
newEl.appendChild(textEl);
// newEl.append(textEl);
console.log(newEl);

console.log(newEl.firstChild.nodeType, Node.TEXT_NODE, newEl.firstChild.nodeValue);
// beforebegin위치에 새로운 텍스트를 추가 Element.prototype.insertAdjacentHTML("beforebegin", "new");

// el.insertAdjacentHTML("beforebegin", "<span>New</span>");
