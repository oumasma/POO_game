const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})


const player = {
    name:'Sirosse',
    class: 'Paladin',
    hp: 8,
    dmg:4,
    mana: 130,
}

const updatePlayer = () => {
    let inputName = document.getElementById("nameplayer").value;
    document.getElementById("name").innerHTML = inputName;

    let inputRace = document.getElementById("raceplayer").value;
    document.getElementById("race").innerHTML = inputRace;

    let inputHealthP = document.getElementById("healthp").value;
    document.getElementsByClassName("hp")[0].innerHTML = inputHealthP + " ";

    let inputMana = document.getElementById("manaplayer").value;
    document.getElementsByTagName("span")[3].innerHTML = inputMana + " ";


    }

