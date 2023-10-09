import container from "./container";
import AdRepo from "../../infra/repositories/Ad";
import ImagesRepo from "../../infra/repositories/Images";
import GetAdsService from "../../application/GetAdsService";
import GetImagesService from "../../application/GetImagesService";
import http from "../../infra/third-party/http";

container.add("GetAds", () => GetAdsService(AdRepo(http)));

container.add("GetImagesService", () => GetImagesService(ImagesRepo(http)));