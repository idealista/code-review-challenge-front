import container from "./container";
import AdRepo from "../../src/infra/repositories/Ad";
import ImagesRepo from "../../src/infra/repositories/Images";
import GetAdsService from "../../src/application/GetAdsService";
import GetImagesService from "../../src/application/GetImagesService";
import http from "../../src/infra/third-party/http";

container.add("GetAds", () => GetAdsService(AdRepo(http)));

container.add("GetImagesService", () => GetImagesService(ImagesRepo(http)));
