    const orderIdInfo = document.getElementById('order-id-info')
    let statusBlocks = document.getElementsByClassName('status-block')

    const addDoneClass =(index)=> statusBlocks[index].classList.add('done')
    const executeOrder = (callback) => {
    const orderId = document.getElementById('order-id-input').value
    orderIdInfo.innerText  =  'status for order Id:'+orderId
    let x=0
    addDoneClass(x++)
    //console.log('Order Placed')
    setTimeout(() => {
        //console.log('Chef received the order and started preparing')
        addDoneClass(x++)
        setTimeout(() => {
            // console.log('Pizza Sauce added')
            addDoneClass(x++)
            setTimeout(() => {
                // console.log('First layer of cheeze added')
                addDoneClass(x++)

                setTimeout(() => {
                    // console.log('Toppings added')
                    addDoneClass(x++)

                    setTimeout(() => {
                        // console.log('Second layer of cheeze added')
                        addDoneClass(x++)
                        
                        setTimeout(() => {
                            // console.log('Pizza baked!')
                            addDoneClass(x++)

                            setTimeout(() => {
                                // console.log('Oregano added and packed')
                                addDoneClass(x++)

                                setTimeout(() => {
                                    // console.log('Package received at counter')
                                    addDoneClass(x++)
                                    callback()
                                }, 2000)

                            }, 8000)

                        }, 15000)

                    }, 5000)

                }, 12000)

            }, 5000)

        }, 10000)
        
    }, 2000)
}
// const oreganoAdded =() =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//            resolve('Chef received the order and started preparing')
//     },2000)
// })
// }
// const packagereceiveatcounter = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Pizza Sauce addedng')
//     },2000)
// })
// }
// const organoadded = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Chef received the order and started preparing')
//     },2000)
// })
// }
// const firstchefreceived = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Chef received the order and started preparing')
//     },2000)
// })
// }
