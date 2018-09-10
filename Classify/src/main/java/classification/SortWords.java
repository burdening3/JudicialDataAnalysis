package classification;

import java.util.*;

public class SortWords {
    public static String[] sort(List<Object> datalist, String keyword, boolean isMap) {

        List<String[]> keywordList = new ArrayList<String[]>();
        keywordList = Snowball.SnowballSamp(datalist,keyword);
        TreeSet times = new TreeSet();
        List<List<String>> top10List = new ArrayList<List<String>>();
        List<List<String>> WordsList = new ArrayList<List<String>>();
        TreeSet words = new TreeSet();

        for (int i = 0; i < keywordList.size(); i++) {
            List<String> tmpls = new ArrayList<String>();
            if( Integer.parseInt(keywordList.get(i)[1]) > 1){
                if(i<10){
                    tmpls.add(keywordList.get(i)[0]);
                    if (isMap == false) tmpls.add(keywordList.get(i)[1]);
                    //System.out.println(tmpls);
                    //times.add(keywordList.get(i)[0]+":"+keywordList.get(i)[1]);
                    top10List.add( tmpls );
                    //System.out.println(keywordList.get(i)[0]);
                }
                String out = keywordList.get(i)[0]+'\t'+keywordList.get(i)[1];
                words.add(keywordList.get(i)[0]);
                //System.out.println(out);
            }
        }
        System.out.println(top10List);
        if (isMap == false) {
            String[] txtmp1 = new String[]{keyword,top10List.toString(),words.toString()};
            return txtmp1;

        }else {
            String[] txtmp1 = new String[]{keyword,top10List.toString().replace("[","").replace("]","").replace(" ","")};
            return txtmp1;

        }

    }



}
