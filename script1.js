const users = [
    {
        name: "Peter Parker",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS97mIvmisreaeBNmV6Id5ZHj_3BQwkeo6LMmHyNWzc8JkYD3dtC4ghhvECePwTxWUHXFjYa0B9QxDXN550SB4imep4zK_rM7zisQmfQrM&s=10",
        bio: "He possesses superhuman agility, the ability to cling to solid walls.",
    },
    {
        name: "Tony Stark",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhuhZEF1St2y1QpJBKNQ0AVJGaZ54f07P5FINLFHDjFR0g6kLC7mpeYKm0AxbFV59UQJNgPRe6m7j2AUiPwn32TQg1F2s4HcVA-nCi4_n&s=10",
        bio: "While lacking innate superpowers, his genius-level intellect allows rule the world.",
    },
    {
        name: "Thor Odinson",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOrZ7bxMwpukI9VijpOXo_II9STxiLi3X59jpn8eRV68nIZX0r80tjVu6ffaTI586i8Sk2BVM33EyN5V8oQi_YlwswAZ1nG0CfO27uYes&s=10",
        bio: "As the Asgardian God of Thunder, he commands raw cosmic weather.",
    },
    {
        name: "Steve Rogers",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5s3iyu5YTh_KnYGvkhIPyioZzDmmY8P-6c33i-Gxh9Pxhk4bEsYX9W9s_258gaBVMyFSeK6mRkeX0PLDgDJFFZcglsg4a1oa-vIhJkDZag&s=10",
        bio: "Enhanced to the absolute peak of human physical perfection by a Super-Soldier Serum.",
    },
    {
        name: "Wanda Maximoff",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJiBI_Ome0U7HaDC9JRuxrs-WrXSEGPKpNPZV4bcQSbEQSDSU6wcWhaZTU6wJdbKTLtdxE7FIb8VVPO6pRJESx_foZShcy78rKygDtemdFQ&s=10",
        bio: "She manipulates reality itself using chaotic Chaos Magic, granting her telekinesis.",
    },
    {
        name: "Bruce Banner",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NsK7lzYUj0jMc2dwr8Ft37p--mHT8GUVHE9Vy6MEl6M8rupDDKvDPjltsMJ5Ymnu9rPaEnw1Aot94rT3U0iC7iBU3TYkSDdS2kPtgWfq8w&s=10",
        bio: "Driven by rage, he transforms into a green behemoth possessing near-infinite physical strength.",
    },
    {
        name: "James Howlett",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8Eu7UzkpvYIE4NpwxlMRDdmWGyYM4bpweSV5s2gpIigV0RBViSjS2kk&s",
        bio: "A mutant endowed with hyper-acute animalistic senses, an un-breachable adamantium-laced skeleton.",
    },
    
]

// saare users show karna
function showUsers(arr){
    arr.forEach(function(user){
        // create outer card div
        const card = document.createElement("div");
        card.classList.add("card")

        // create image
        const img = document.createElement("img");
        img.src = user.pic
        img.classList.add("bg-img");

        // create blurred layer div
        const blurredLayer = document.createElement("div")
        blurredLayer.classList.add("blurred-layer")

        // create content div
        const content = document.createElement("div")
        content.classList.add("content")

        // create h3 and paragraph
        const heading = document.createElement("h3")
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        // append heading and para to content
        content.appendChild(heading)
        content.appendChild(para);

        // append all to card
        card.appendChild(img)
        card.appendChild(blurredLayer);
        card.appendChild(content)

        // append card to the body
        document.querySelector(".cards-container").appendChild(card)
    })
}

showUsers(users)

// filter karna har baar input karne par

let inp = document.querySelector(".search")
inp.addEventListener("input", function(){
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value)
    })

    document.querySelector(".cards-container").innerHTML = ""

    if(newUsers.length>0) {showUsers(newUsers)}
    else {
        const noData = document.createElement("div")
        noData.classList.add("no-data")

        const paragraph = document.createElement("p")
        paragraph.textContent = "Try searching for another user."

        const headings = document.createElement("h3")
        headings.textContent = "No Data Found"

        noData.appendChild(headings)
        noData.appendChild(paragraph)

        document.querySelector(".cards-container").appendChild(noData)
}
})


// show karna filtered users