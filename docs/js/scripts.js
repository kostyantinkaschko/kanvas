let buttonWidthOn = document.getElementById('widthOn'),
    on = false,
    off = true,
    canvas = document.getElementById("canvas"),
    leftContent = document.getElementById("molbert"),
    onPopup = false,
    offPopup = true,
    numberPopup = document.getElementById("popup"),
    body = document.body,
    numberOfTelephone = document.getElementById("numberOfTelephone"),
    diysniyNomerTelephona = document.getElementById("diysniyNomerTelephona")

function customWidth() {
    let customWidth = document.getElementById('customWidth'),
        rightside = document.getElementById('rightside'),
        radio1 = document.getElementById('size1'),
        radio2 = document.getElementById('size2'),
        radio3 = document.getElementById('size3'),
        radio4 = document.getElementById('size4'),
        customWidthInput = document.getElementById("customWidthInput")
    customHeightInput = document.getElementById("customHeightInput")
    if (off) {
        customWidth.style.display = "flex"
        rightside.style.paddingBottom = "0"
        rightside.style.paddingTop = "0"
        off = false
        on = true
        radio1.required = false
        radio2.required = false
        radio3.required = false
        radio4.required = false
        radio1.disabled = true
        radio2.disabled = true
        radio3.disabled = true
        radio4.disabled = true
        customWidthInput.required = true
        customHeightInput.required = true
        disabledRadio()
    } else if (on) {
        customWidth.style.display = "none"
        on = false
        off = true
        rightside.removeAttribute("style")
        radio1.required = true
        radio2.required = true
        radio3.required = true
        radio4.required = true
        radio1.disabled = false
        radio2.disabled = false
        radio3.disabled = false
        radio4.disabled = false
        radio1.checked = true
        changeSize(30, 30)
        customWidthInput.required = false
        customHeightInput.required = false
    }
}


// function changeSize(width, height) {
//     width = width / 10
//     height = height / 10
//     if(height == 9){
//         height = 6
//     }
//     if(width == 9){
//         width = 6
//     }
//     console.log(width)
//     console.log(height)
//     let heightVar = heightAndWidthFor10 * height,
//         bottom = bottomPercent + (plusTen * (height - Math.ceil(((66 / 100)) * height)))
//     if (Math.round(bottom) % 10 === 5) {
//         bottom += 5
//     }
//     if (width === 3) {
//         canvas.style.width = "218rem"
//     } else {
//         canvas.style.width = `${heightAndWidthFor10 * 9}rem`
//     }
//     canvas.style.height = `${heightVar}rem`
//     canvas.style.bottom = `${bottom}%`
//     updatePrice()
// }

let heightAndWidthFor10 = 66,
    bottomPercent = 26,
    plusTen = 9.7,
    widthDa, heightDa, adjustedWidth, adjustedHeight,
    bottom = 0

function changeSize(width, height) {

    if (width && height) {
        widthDa = width
        heightDa = height
        adjustedWidth = (width / 100) * 300
        adjustedHeight = (height / 100) * 300
        updatePrice()
    } else {
        const widthInputElement = document.getElementById('customWidthInput'),
            heightInputElement = document.getElementById('customHeightInput'),
            errorkratneTen = document.getElementById('kratneTen'),
            errorpovnaForma = document.getElementById('povnaForma'),
            erorrlimitPoNumbers = document.getElementById('limitPoNumbers'),
            block = document.getElementById("block")
        errorkratneTen.removeAttribute("style")
        errorpovnaForma.removeAttribute("style")
        erorrlimitPoNumbers.removeAttribute("style")
        if (widthInputElement.value % 10 === 0 && heightInputElement.value % 10 === 0 && heightInputElement.value >= 30 && widthInputElement.value >= 30) {
            width = Number(widthInputElement.value)
            height = Number(heightInputElement.value)
            widthDa = width
            heightDa = height
            adjustedWidth = (width / 100) * 300
            adjustedHeight = (height / 100) * 300
        } else if (widthInputElement.value % 10 !== 0 || heightInputElement.value % 10 !== 0) {
            errorkratneTen.style.display = "block"
            if (window.innerWidth >= 900) {
                block.style.marginBottom = "10rem"
            }
        } else if (widthInputElement.value.trim() === "" || heightInputElement.value.trim() === "") {
            errorpovnaForma.style.display = "block"
            if (window.innerWidth >= 900) {
                block.style.marginBottom = "10rem"
            }
        } else if (heightInputElement.value < 30 || (widthInputElement.value < 30)) {
            erorrlimitPoNumbers.style.display = "block"
            if (window.innerWidth >= 900) {
                block.style.marginBottom = "10rem"
            }
        }
    }


    let da = 0

    if (window.innerWidth < +430) {
        da = -6
    } else if (window.innerWidth < 1325) {
        da = 7
    }
    console.log(`window.innerWidth: ${window.innerWidth}`)

    let originalBottom = 187.5 + da


    switch (heightDa) {
        case 30:
            bottom = originalBottom
            break
        case 40:
            bottom = 202.4 + da
            break
        case 50:
            bottom = 217.5 + da
            break
        case 60:
            bottom = 232 + da
            break
        case 70:
            bottom = 248.1 + da
            break
        case 80:
            bottom = 263 + da
            break
        case 90:
            bottom = 278 + da
            break
        case 100:
            bottom = 292 + da
            break
        case 110:
            bottom = 307.4 + da
            break
        case 120:
            bottom = 322 + da
            break
        case 130:
            bottom = 338 + da
            break
        case 140:
            bottom = 353 + da
            break
        case 150:
            bottom = 367 + da
            break
        default:
            bottom = originalBottom
            break
    }
    updatePrice(adjustedWidth, adjustedHeight)

    canvas.style.width = `${adjustedWidth}rem`
    canvas.style.height = `${adjustedHeight}rem`
    console.log(bottom)
    canvas.style.bottom = `${bottom}rem`
}


function disabledRadio() {
    let radio = document.querySelectorAll('input[name="width"]')
    radio.forEach(radio => {
        radio.checked = false
    })
}


function updatePrice(width, height) {
    let price = (width + height) / 2,
        rigth = document.getElementById("rigth")
    if (document.querySelector('input[name="expensive-canvas"]').checked) {
        price += 35
    }
    if (document.querySelector('input[name="frame"]').checked) {
        price += 10
    }
    if (document.querySelector('input[name="nova-poshta"]').checked) {
        price += 40
    }
    if (price >= 100) {
        rigth.style.columnGap = "10rem"
    }

    document.getElementById('totalPrice').textContent = price
}


function numberOfPopup() {
    if (offPopup) {
        numberPopup.style.display = "flex"
        offPopup = false
        onPopup = true
        document.querySelector('input[name="expensive-canvas"]').disabled = true
        document.querySelector('input[name="frame"]').disabled = true
        document.querySelector('input[name="nova-poshta"]').disabled = true
    } else if (onPopup) {
        numberPopup.removeAttribute("style")
        onPopup = false
        offPopup = true
        document.querySelector('input[name="expensive-canvas"]').disabled = false
        document.querySelector('input[name="frame"]').disabled = false
        document.querySelector('input[name="nova-poshta"]').disabled = false
    }
}


function send() {
    const regular = /^(?:\+380\d{9}|0\d{9}|\+38\s\d{3}\s\d{3}\s\d{2}\s\d{2}|\d{3}\s\d{3}\s\d{2}\s\d{2}|\+38-\d{3}-\d{3}-\d{2}-\d{2}|\d{3}-\d{3}-\d{2}-\d{2}|\+38\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}|\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}|\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}|\(\d{3}\)\s\d{3}-\d{2}-\d{2}|\d{3}\s\d{3}-\d{2}-\d{2})$/,
        numberOfTelephoneValue = numberOfTelephone.value.trim();

    console.log(numberOfTelephoneValue);

    if (!regular.test(numberOfTelephoneValue)) {
        diysniyNomerTelephona.style.display = "block";
    } else {
        location.reload();
    }
}



updatePrice(30, 30)
changeSize(30, 30)