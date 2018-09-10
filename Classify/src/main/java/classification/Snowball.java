package classification;


import java.util.*;
import java.util.regex.Pattern;

public class Snowball {
    public static boolean isInteger(String str) {
        Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");
        return pattern.matcher(str).matches();
    }

    public static List<String[]> SnowballSamp(List<Object> datalist,String keyword) {

        TreeMap<String,Integer> wordsCount = new TreeMap<String, Integer>();

        for (int i = 0; i < datalist.size(); i++) {
                List<String> tmp = (List<String>)datalist.get(i);
                if (tmp.contains(keyword)){
                    for(String word : tmp){
                        if(wordsCount.get(word) != null && !isInteger(word) ){
                            wordsCount.put(word,wordsCount.get(word) + 1);
                        }
                        else {
                            wordsCount.put(word,1);
                        }
                    }
                }
        }

        return SortMap(wordsCount);
    }

    public static List<String[]> SortMap(Map<String,Integer> oldmap){
//        TreeMap<String,Integer> newMap = new TreeMap<String, Integer>();
        List<String[]> newList = new ArrayList<String[]>();
        ArrayList<Map.Entry<String,Integer>> list = new ArrayList<Map.Entry<String,Integer>>(oldmap.entrySet());

        Collections.sort(list,new Comparator<Map.Entry<String,Integer>>(){

            public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
                return o2.getValue() - o1.getValue();  //降序
            }
        });

        for(int i = 0; i<list.size(); i++){
            //newMap.put(list.get(i).getKey(),list.get(i).getValue());
            newList.add(new String[]{list.get(i).getKey().toString(),list.get(i).getValue().toString()});
            //System.out.println(list.get(i).getKey()+ ": " +list.get(i).getValue());
        }
        return newList;
    }


}
