function rankPlayers(players){
    return players.sort((a,b) => b.winPercentage - a.winPercentage);
}

// TC: O(n log n)
// SC: O(1) 