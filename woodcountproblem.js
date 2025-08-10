function woodQuantity(totalChair, totalTable, totalBed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood = perChairWood * totalChair;
    const tableTotalWood = perTableWood * totalTable;
    const bedTotalWood = perBedWood * totalBed;

    const totalWood = chairTotalWood + tableTotalWood +bedTotalWood;
    return totalWood;
    
}
const wood = woodQuantity(6,0,1);
console.log(wood);