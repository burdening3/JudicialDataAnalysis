package classification;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CountByDate {
    public Map CountWithoudLoc(List<CateToJson.disputes> disList){
        StringBuffer sb = new StringBuffer();
//        Map<String,Integer> date = new HashMap<>();
        Map<String,Map<String,Integer>> map = new HashMap<>();

        for (CateToJson.disputes d:disList
             ) {
            if (map.get(d.Sector+"@"+d.Name)!=null){
                if( map.get(d.Sector+"@"+d.Name).get(d.getMonth())!=null ){
                    map.get(d.Sector+"@"+d.Name).put(d.getMonth(),map.get(d.Sector+"@"+d.Name).get(d.getMonth())+1);
                }
                else {
                    map.get(d.Sector+"@"+d.Name).put(d.getMonth(),1);
                }
            }
            else {
                Map<String,Integer> date = new HashMap<String, Integer>();
                date.put(d.getMonth(),1);
                map.put(d.Sector+"@"+d.Name,date);
            }
        }


        return map;
    }
}
