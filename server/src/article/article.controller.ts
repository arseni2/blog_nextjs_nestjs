import {Body, Controller, Get, Param, Post, Request, UseGuards} from '@nestjs/common';
import {ArticleService} from './article.service';
import {CreateArticleDto} from './dto/create-article.dto';
import {AuthenticatedGuard} from "../auth/guards/auth.guard";

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  @UseGuards(AuthenticatedGuard)
  create(@Body() createArticleDto: CreateArticleDto, @Request() req) {
    console.log(req.user)
    return this.articleService.create(createArticleDto, req.user.id);
  }

  @Get('all')
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }
}
