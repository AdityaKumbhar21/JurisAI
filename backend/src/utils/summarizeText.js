import {pipeline} from "@xenova/transformers";


let summarizer;
const loadSummarizer = async()=>{
    if(!summarizer){
        summarizer = await pipeline("summarization", "Xenova/distilbart-cnn-6-6");
    }
    return summarizer;
}


export const summarizeText = async (text)=>{
    const model = await loadSummarizer();
    const result = await model(text, ({
        max_length: 400,
        min_length: 80,
        do_sample: false,
        num_beams: 4,
        repetiton_penalty: 1.2

    }));

    return result[0].summary_text;
}