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
  }else{
     lastPage = pages[1].slice(pages[1].indexOf('=') + 1)

  }

  return lastPage;

}