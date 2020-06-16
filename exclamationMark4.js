function remove(s){
    let removed = s.replace(/!/gi, "");
    removed = removed.concat("!");
    return removed;
  }