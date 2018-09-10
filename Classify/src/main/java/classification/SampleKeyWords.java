package classification;

import java.util.*;

public class SampleKeyWords {
    public String categorize (List<Object> dataList,HashMap<String,String[]> map){

        Set output = new HashSet();
        List<String> tmp = new ArrayList<String>();
        String txtmp = new String();
        for (int i = 0; i < dataList.size(); i++) {
            tmp = (List<String>)dataList.get(i);//取出一次纠纷
            //System.out.println(tmp);
            output.removeAll(output);
            for (int j = 0; j < tmp.size(); j++) {//取出一次纠纷的每一个词
                Set<String> set = map.keySet(); //取出所有的key值 key值代表类型
                for (String key:set) {
//                  System.out.println("第一种："+map.get(key));
                    if (Arrays.asList(map.get(key)).contains(tmp.get(j))) output.add(key);
                }
            }
            txtmp += tmp+"|"+output.toString()+"\n";
        }

        return txtmp;
    }

    public String Sample (String filepath, List<Object> dataList,boolean isMap){

        String keys = FileWrite.txt2String("KeyToSample.txt");
        StringBuffer keyoutput = new StringBuffer();
        //System.out.println(keys);
        for (String key:keys.split("\r\n")
                ) {

            if(key.length()==0 || key.contains("//")) continue;
            System.out.println(key);
            String[] txtmp1 = SortWords.sort(dataList,key,isMap);

            for (String str:txtmp1
                    ) {
                keyoutput.append(str+"|");
            }
            if (isMap==true) keyoutput.deleteCharAt(keyoutput.length()-1);
            keyoutput.append("\r\n");

        }

        return keyoutput.toString();
    }


}
