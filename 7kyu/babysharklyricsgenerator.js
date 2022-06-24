babySharkLyrics=()=>{var d='doo doo doo doo doo doo\n'
let l=''
for(i=0;i<=24;i++){let w=i<4?'Baby':i<8?'Mommy':i<12?'Daddy':i<16?'Grandma':i<20?'Grandpa':"Let's go hunt"
i==24?l+=`Run away,…`:i==23?l+=`${w}!\n`:i>=20?l+=`${w}, ${d}`:(i+1)%4==0?l+=`${w} shark!\n`:l+=`${w} shark, ${d}` 
}return l}

