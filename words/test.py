#encoding=utf-8
import jieba
jieba.load_userdict("lawwords.txt")
jieba.load_userdict("stopwords.txt")
jieba.load_userdict("manually.txt")
filename = "neirong.csv"
stopwords_file = "stopwords.txt"
chinese_punc = "[\u0020\u0060|\u0021-\u002c|\u002e-\u002e|\u003a-\u003f|\u2200-\u22ff|\uFB00-\uFFFD|\u2E80-\u33FF]"

stop_f = open(stopwords_file,"r",encoding='utf-8')
stop_words = list()
for line in stop_f.readlines():
    line = line.strip()
    if not len(line):
        continue

    stop_words.append(line)
stop_f.close

print(len(stop_words))


f = open(filename,"r",encoding='utf-8')
result = list()
for line in f.readlines():
    line = line.strip()
    if not len(line):
        continue
    outstr = ''
    seg_list = jieba.cut(line,cut_all=False)
    for word in seg_list:
        if word not in stop_words:
            if word != ' ':
                outstr += word
                outstr += "/"
   # seg_list = " ".join(seg_list)
    result.append(outstr.strip())
f.close

with open("splits.txt","w",encoding='utf-8') as fw:
    for sentence in result:
        sentence.encode('utf-8')
        data=sentence.strip()
        if len(data)!=0:
            fw.write(data)
            fw.write("\n")


print ("end")