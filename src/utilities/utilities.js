export const calculateHourDiff = pastTime => {
    let past = new Date(pastTime);
    past = past.getTime();
    let now = Date.now("UTC");
    let elapsed = now - past;
    let diff = new Date(elapsed);
    let hours = diff.getHours();
    let days = 0;
    if (hours >= 24) {
        days += 1;
    }
    return days >= 1 ? days + " days" : hours + " hours";
};

export const parseLink =(link) =>{
  let pages = link.match(/\page=\d+/g);
  let lastPage;
  if(pages.length > 3){
     lastPage = pages[2].slice(pages[2].indexOf('=') + 1)
  }
  else{
    let num_1 = parseInt(pages[0].slice(pages[0].indexOf('=') + 1));
    let num_2 = parseInt(pages[1].slice(pages[1].indexOf('=') + 1));
    if(num_1 > num_2 ){
      lastPage = num_1 + 1;
    }
    else{
      lastPage =  num_2;
    }

  }
  return lastPage;

};

// initialIndex:
// <https://api.github.com/repositories/10270250/issues?page=2>;
// rel="next",
// <https://api.github.com/repositories/10270250/issues?page=13>;
// rel="last"

// lastIndex:
// <https://api.github.com/repositories/10270250/issues?page=12>;
// rel="prev",
// <https://api.github.com/repositories/10270250/issues?page=1>;
// rel="first"

// Index in the middle:
// <https://api.github.com/repositories/10270250/issues?page=1>;
// rel="prev",
// <https://api.github.com/repositories/10270250/issues?page=3>;
// rel="next",
// <https://api.github.com/repositories/10270250/issues?page=13>;
// rel="last",
// <https://api.github.com/repositories/10270250/issues?page=1>; rel="first"