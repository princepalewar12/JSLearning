function eligibility(gradScore, hscScore, sscScore, candidateName){
    var result = gradScore>=70 || hscScore>=80 ||sscScore>=90 ? console.log(`Congrates "${candidateName}" you are eligible for TCS interview.`) :
                console.log(`Unfortunately You are not eligible for interview.`);
}
eligibility("80",'86','90',"prince");
eligibility('70','65','55',"sean");
eligibility(60,79,88,"ram");