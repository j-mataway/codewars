function search(n, root) {

    if(root == null){return false}
     
    if(root.value == n){return true} 
     
    var res1 = search(n, root.left)
    if(res1){return true}
     
    var res2 = search(n, root.right)
    return res2
   
   }